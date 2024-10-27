import sharp from "sharp";
import fs from "fs";

// Define input and output directories
const inputDirectory = "./src/illustrations";
const outputDirectory = "./public/images/illustrations";

// Maximum width and height for resizing
const maxWidth = 1920;

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// List all files in the input directory
const files = fs.readdirSync(inputDirectory);

// Loop through each file and apply advanced compression techniques
files.forEach((file) => {
  if (file.match(/\.(jpg|jpeg|png)$/)) {
    sharp(`${inputDirectory}/${file}`)
      .resize(maxWidth)
      .webp({ quality: 80 }) // Convert to WebP format
      .toFile(`${outputDirectory}/${file}`, (err, info) => {
        if (err) {
          console.error(`Error processing ${file}: ${err}`);
        } else {
          console.log(`Advanced compression applied to ${file}`);
        }
      });
  }
});
