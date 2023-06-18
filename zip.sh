cd packages/backend
zip -q -r auth_build.zip build package.json
mv auth_build.zip ../..
cd ../..
mkdir auth_build
unzip auth_build.zip -d ./auth_build
cd auth_build
yarn install
zip -q -r auth_build.zip build package.json node_modules
mv auth_build.zip ../
cd ../
rm -rf auth_build