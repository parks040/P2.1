// Array of images

// var arr = ["A", "B", "C"];
//             0.   1.   2
// arr[0] = "A"

// var happyBirthday = ["march 9th", "december 12th", "april 6th"];

// happyBirthday[0] = "march 9th"
// happyBirthday[2]= "april 6th"

// var age= [88, 18, 14, 90]

// DIRECTIONS: UPDATE THE URLS WITH THE RELATIVE LINKS OF YOUR IMAGES

// array of 27 images
// 0 - A
const images = [
    "https://cdn.glitch.global/37571d9b-b1be-4800-a775-3aefd95bb8ad/apple.jpg?v=1740532829700", //A
    "https://i.pinimg.com/736x/d9/5e/66/d95e66e8859e7177e5ddfcee0d4e88cd.jpg", //B
    "https://i.pinimg.com/736x/2c/f8/66/2cf866bb9baa027ace8b0592f87e4717.jpg", //C
    "https://i.pinimg.com/736x/05/2a/50/052a5027698330849e5b15343daf8058.jpgD", //D
    "https://i.pinimg.com/736x/48/89/70/488970ae513bb0605cddc260e8b57bb1.jpg", //E
    "https://i.pinimg.com/736x/e6/85/10/e6851022aa1b7c738d07bc2426889e42.jpg", //F
    "https://i.pinimg.com/736x/c3/f1/16/c3f116305a4261a7d1ca4fd875c57810.jpg", //G
    "https://i.pinimg.com/736x/20/db/26/20db26d9dab39aa378f674236300c460.jpg", //H
    "https://i.pinimg.com/736x/7f/99/c2/7f99c28b8c449a7edcad208cf5dd6122.jpg", //I
    "https://i.pinimg.com/736x/3e/a7/eb/3ea7eb4112423c1bd720ede0c939d838.jpg", //J
    "https://i.pinimg.com/736x/bb/d9/e6/bbd9e631cbc0bff440d229a24500577c.jpg", //K
    "https://i.pinimg.com/736x/05/67/90/0567900d755225e5dc7c04b6cf6e7f67.jpg", //L
    "https://i.pinimg.com/736x/02/ff/cf/02ffcf4f2709144606bc8d1081e21da1.jpg", //M
    "https://i.pinimg.com/736x/9e/b7/21/9eb72191eb374fbf5dcddc55fc3b39c1.jpg", //N
    "https://i.pinimg.com/736x/de/86/bf/de86bf54851853f0944d58c7e51f2f9b.jpg", //O
    "https://i.pinimg.com/736x/bd/df/91/bddf91f574ce5128b921240fb238209f.jpg", //P
    "https://i.pinimg.com/736x/d9/ca/67/d9ca670ed95005f2f47bcf3c71c9da30.jpg", //Q
    "https://i.pinimg.com/736x/5a/99/f8/5a99f82cec9165efed7139ff62c0e46e.jpg", //R
    "https://i.pinimg.com/736x/5f/34/ff/5f34ff0677dd7967655358d5a64d51ce.jpg", //S
    "https://i.pinimg.com/736x/a9/bb/25/a9bb25260d7e2060105d40c9770d3405.jpg", //T
    "https://i.pinimg.com/736x/67/5c/e9/675ce9bf48fb8b8f42b7763f2e835ad5.jpg", //U
    "https://i.pinimg.com/736x/61/3c/11/613c11ea803dd1af1be858a05cda64a1.jpg", //V
    "https://i.pinimg.com/736x/a5/f7/0a/a5f70a0fb0db8b6e7f1ee9e207945c3d.jpg", //W
    "https://i.pinimg.com/736x/23/64/ca/2364ca238af5321a3984fd822b0bb2e2.jpg", //X
    "https://i.pinimg.com/736x/07/23/4c/07234c71d35257382dfb27db0f99f672.jpg", //Y
    "https://i.pinimg.com/736x/93/80/5a/93805acad550890d2cea755e0f7251e8.jpg", //Z
  ];
  
  function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
  
    // Assign an image based on character (A-Z)
    const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
    if (index >= 0 && index < images.length) {
      imgElement.src = images[index];
      imgElement.style.display = "block";
    } else {
      alert("Please enter a letter between A and Z.");
      imgElement.style.display = "none";
  
      // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
      imgElement.src =
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";
      imgElement.style.display = "block";
    }
  }
  