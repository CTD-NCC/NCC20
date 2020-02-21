import os
from .main import run_in_sandbox

TESTCASES_NO = 6

path_main = 'judgeApp'
path_users_code = 'data/usersCode/'
standard_data = 'data/standard/'


def get_signals_dict():
    signals = {
        0: 'AC',  # Correct ans

        1: 'CTE',  # compile time error
        127: 'CTE',
        256: 'C.T.E',

        # All of these codes(exit codes of a process) are of the format 128 + signal code generated by child process

        159: 'AT',  # 31 SIGSYS (When system call doent match)
        135: 'AT',  # Bus error 7 int x[10000000000000]

        136: 'RTE',  # SIGFPE sig -> 8 floating point exception
        139: 'RTE',  # (128 + 11) -> 11 SIGSEGV (Invalid memory reference)

        137: 'TLE',  # SIGKILL 9  (Time limit exceeded or resource voilation killed by setprlimit)

        'wa': 'WA',  # Wrong answer
    }

    return signals


def compare(user_out, e_out):
    user = open(user_out, "r")
    expected = open(e_out, "r")

    lines_user = user.read()
    lines_expected = expected.read()
    user.close()
    expected.close()

    if lines_user == lines_expected:
        return 0
    else:
        return 'wa'


def clean_up(user_que_path):
    for i in range(TESTCASES_NO):
        fp = user_que_path + 'output{}.txt'.format(i + 1)
        if os.path.exists(fp):
            os.system('rm ' + user_que_path + 'output{}.txt'.format(i + 1))


def get_quota(qno, test_case_no):
    if test_case_no == 7:
        test_case_no = 6

    descrip_path = standard_data + 'description/question{}/quota{}.txt'.format(qno, test_case_no)
    descrip_f = open(descrip_path)

    lines = descrip_f.readlines()
    time = lines[0].strip()
    mem = lines[1].strip()  # memory

    quota = {
        'time': int(time),
        'mem': int(mem),
    }
    return quota


def run_test_case(test_case_no, user_que_path, code_file_path, qno):
    input_file = standard_data + 'input/question{}/input{}.txt'.format(qno, test_case_no)
    input_f = open(input_file, "r")  # standard input

    user_out_file = user_que_path + 'output{}.txt'.format(test_case_no)
    user_out_f = open(user_out_file, "w+")

    quota = get_quota(qno, test_case_no)

    error_file = user_que_path + "error.txt"
    err_f = open(error_file, 'w+')

    exec_file = user_que_path + 'exe'

    process_code = run_in_sandbox(
        exec_file,
        input_f,
        user_out_f,
        err_f,
        quota
    )

    input_f.close()
    err_f.close()
    user_out_f.close()

    e_output_file = standard_data + 'output/question{}/expected_output{}.txt'.format(qno, test_case_no)

    if process_code == 0:
        result_value = compare(user_out_file, e_output_file)
        return result_value

    return process_code


def compile_code(user_question_path, code_file_path, err_file):
    lang = code_file_path.split('.')[1]
    if lang == 'c':
        rc = os.system(
            "gcc" + " -o " + user_question_path + 'exe ' + code_file_path + ' -lseccomp ' + '-lm 2>' + err_file)
    else:
        rc = os.system(
            "g++" + " -o " + user_question_path + 'exe ' + code_file_path + ' -lseccomp ' + '-lm 2>' + err_file)

    return rc  # return 0 for success and 1 for error


def exec_main(username, qno, lang, attempts=None, run=False):
    user_question_path = path_users_code + '{}/question{}/'.format(username, qno)

    if run:
        code_file_path = user_question_path + 'code.{}'.format(lang)

    else:
        code_file_path = user_question_path + 'code{}.{}'.format(attempts, lang)

    signals = get_signals_dict()

    error_file = user_question_path + "error.txt"

    result = []

    # Compile only if c or cpp
    return_value = compile_code(user_question_path, code_file_path, error_file)  # calling compile()
    print("compile", return_value)

    if return_value != 0:
        if run == False:
            result = ["CTE"] * TESTCASES_NO
            return result
        else:
            return 'CTE'

    if run:
        process_code = run_test_case(
            test_case_no=1,
            user_que_path=user_question_path,
            code_file_path=code_file_path,
            qno=qno
        )
        print("pc", process_code)
        return signals[process_code]

    else:
        for i in range(TESTCASES_NO):
            process_code = run_test_case(
                test_case_no=i+1,
                user_que_path=user_question_path,
                code_file_path=code_file_path,
                qno=qno
            )
            print("pc", process_code)
            result.append(signals[process_code])
            clean_up(user_question_path)

    return result
