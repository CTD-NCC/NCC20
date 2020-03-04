cd ~/../
cd home/$1/NCC20/frontend/
npm install
npm run build

cd ~/../
cp -a home/$1/NCC20/frontend/build/. ~/../var/www/html/

# include <iostream>
using namespace std;


int main(){
  int n;
  cin >> n;

  for(int i=1; i<=n; i++)
    cout << i << endl;
  return 0;
}