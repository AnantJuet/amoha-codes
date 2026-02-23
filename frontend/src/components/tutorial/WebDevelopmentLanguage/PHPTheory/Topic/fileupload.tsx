import React from "react";

const PHPFileUpload: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP File Upload</h1>

      <p>
        With PHP, it is easy to upload files to the server. But always be careful when allowing file uploads!
      </p>

      <h2 className="text-2xl font-semibold mt-6">Configure the <code>php.ini</code> File</h2>
      <p>Ensure PHP is configured to allow file uploads:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`file_uploads = On`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Create the HTML Form</h2>
      <p>Create a form to let users select a file to upload:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>`}
      </pre>
      <p className="mt-2">
        <strong>Important:</strong> Use <code>method="post"</code> and <code>enctype="multipart/form-data"</code> for file uploads to work.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Create the Upload PHP Script</h2>
      <p>The <code>upload.php</code> file handles the file upload:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is actual image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" &&
   $imageFileType != "jpeg" && $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if upload is ok
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>`}
      </pre>

      <p className="mt-2">
        Make sure to create a folder called <code>uploads</code> in the same directory as <code>upload.php</code> to store uploaded files.
      </p>
    </div>
  );
};

export default PHPFileUpload;
