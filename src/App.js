import React from "react";
import CatalogViewer from "./Components/CatalogViewer";

const images = [
  {
    src: "https://images.unsplash.com/photo-1679678691007-67ae3f68a13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "First image Description",
    desc: "This is a beautiful landscape photo of a mountain range. The snow-capped peaks tower over a valley filled with evergreen trees, while a vivid blue sky hovers above. The early morning light creates long shadows across the landscape, adding depth and contrast to the scene.",
  },
  {
    src: "https://images.unsplash.com/photo-1682284919306-800ab01eef9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    caption: "Second image Description",
    desc: "This is a stunning portrait of a woman with piercing blue eyes. She stares directly into the camera, exuding confidence and power. Her gaze is intense and captivating, drawing the viewer in and leaving a lasting impression.",
  },
  {
    src: "https://images.unsplash.com/photo-1682361370648-521dce49abb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    caption: "Third image Description",
    desc: "This is a unique and creative art installation featuring colorful paper lanterns hanging from the ceiling. The lanterns come in all shapes and sizes, forming a vibrant and playful display. The soft light emanating from the lanterns creates a warm and inviting atmosphere.",
  },
  {
    src: "https://images.unsplash.com/photo-1641142147923-465e409cf30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "Fourth image Description",
    desc: "This is an action-packed sports photo capturing a basketball player mid-dunk. His body is suspended in the air, with the ball poised to slam through the hoop. The energy and excitement of the moment are palpable, making this a thrilling and dynamic image.",
  },
  {
    src: "https://images.unsplash.com/photo-1637333988730-870dce919f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdpZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    caption: "Fifth image Description",
    desc: "This is a serene and peaceful photo of a tranquil lake at sunset. The water is perfectly still, reflecting the vivid oranges and pinks of the sky above. The silhouettes of trees and mountains can be seen in the distance, adding depth and texture to the scene.",
  },
];

function App() {
  return (
    <div className="App">
      <CatalogViewer images={images} />
    </div>
  );
}

export default App;
