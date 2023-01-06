/* eslint-disable no-console */

// this file is just temporary to assist in keeping the changelog and dep bumps up to date until we complete the extraction
const fs = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');
const { isEqual } = require('lodash');

const packageName = 'react-catalog-view-extension';

const rawPreviousRepoLink = `https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/${packageName}`;

const getFileContent = async (fileName) => {
  try {
    const res = await fetch(`${rawPreviousRepoLink}/${fileName}`);
    return res.text();
  } catch (err) {
    console.log('Error', err);
  }
};

const updateChangelog = async () => {
  const changelogPath = 'packages/module/CHANGELOG.md';
  const externalChangelog = await getFileContent('CHANGELOG.md');
  const internalChangelog = fs.readFileSync(path.join(process.cwd(), changelogPath), 'utf-8');

  if (externalChangelog === internalChangelog) {
    console.log('no changes found in changelog');
  } else {
    fs.outputFileSync(changelogPath, externalChangelog);
    console.log('changelog updated');
  }
};

const updatePackageFile = async () => {
  const externalPackageFile = await getFileContent('package.json');
  const { dependencies: externalDeps, devDependencies: externalDevDeps } = JSON.parse(externalPackageFile);

  const internalPackageFilePath = 'packages/module/package.json';
  const internalPackageFile = fs.readFileSync(path.join(process.cwd(), internalPackageFilePath), 'utf-8');
  const internalParsedPackageFile = JSON.parse(internalPackageFile);
  const { dependencies: internalDeps, devDependencies: internalDevDeps } = internalParsedPackageFile;

  const mergedDeps = { ...internalDeps, ...externalDeps };
  const mergedDevDeps = { ...internalDevDeps, ...externalDevDeps }

  if (isEqual(internalDeps, mergedDeps) && isEqual(internalDevDeps, mergedDevDeps)) {
    console.log('no changes found in dependencies or devDependencies');
  } else {
    const newPackageFile = {
      ...internalParsedPackageFile,
      dependencies: mergedDeps,
      devDependencies: mergedDevDeps
    };
    const newPackageFileString = `${JSON.stringify(newPackageFile, null, 2)}\n`;

    fs.outputFileSync(internalPackageFilePath, newPackageFileString);
    console.log('package file updated');
  }
};

updateChangelog();
updatePackageFile();
