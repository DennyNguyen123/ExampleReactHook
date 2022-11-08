echo "Building app..."
npm run build

echo deploy to server
scp -r build/* devdemoo@devdemo.online:~/www/

echo "Done."