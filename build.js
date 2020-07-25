const copydir = require("copy-dir");
const { exec } = require("child_process");
const copyName = "homeschooltoday-theme";
const chalk = require("chalk");

function zip_the_dir(name) {
  exec(
    `cd .. && zip -r ${name}.zip ${name} && rm -rf ${name} && mv "${name}.zip" "${__dirname}.zip"`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.bgRed(`error: ${error.message}`));
        return;
      }
      if (stderr) {
        console.log(chalk.green(`stderr: ${stderr}`));
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(chalk.green("Done zipping"));
    }
  );
}

function copy_the_dir(name) {
  copydir(
    "./",
    `../${name}`,
    {
      utimes: true, // keep add time and modify time
      mode: true, // keep file mode
      cover: true, // cover file when exists, default is true
      filter: function (stat, filepath, filename) {
        // do not want copy .svn directories
        if (stat === "directory" && filename === "node_modules") {
          return false;
        }

        return true; // remind to return a true value when file check passed.
      },
    },
    function (err) {
      if (err) throw err;
      console.log(chalk.green("Done copy"));
      zip_the_dir(name);
    }
  );
}

copy_the_dir(copyName);
