const copydir = require("copy-dir");
const { exec } = require("child_process");
const name = "homeschooltoday-archive";

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
      console.log("done");
    }
  );
}

function zip_the_dir(name) {
  exec(`cd .. zip -r ${name}.zip ${name}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  exec(`rmdir ${name}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

copy_the_dir(name);
zip_the_dir(name);
