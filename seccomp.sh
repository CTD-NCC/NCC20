# seccomp installations
sudo apt-get install autoconf
sudo apt-get install libtool
python3 -m pip install cython

tar -xvf libseccomp.tar.xz
cd libseccomp

make
sudo make install

cd ..
sudo rm -r libseccomp

LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib/
export LD_LIBRARY_PATH

# Node INstallation
sudo apt update
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install nodejs
echo "Node installed !"
