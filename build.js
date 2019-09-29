const rcs = require('rename-css-selectors');

const TARGET_FOLDER = 'dist';
const OPTIONS = {};

async function renameCss() {
  await rcs.process.auto(
    [
      `${TARGET_FOLDER}/*.js`,
      `${TARGET_FOLDER}/*.html`,
      `${TARGET_FOLDER}/*.css`
    ],
    OPTIONS
  );
  await rcs.generateMapping('./', { overwrite: true });
}

(async () => {
  try {
    await renameCss();
  } catch (err) {
    console.error(err);
  }
})();
