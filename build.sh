cd ~/../
cd home/$1/NCC20/frontend/
npm install
npm run build

cd ~/../
cp -a home/$1/NCC20/frontend/build/. ~/../var/www/html/