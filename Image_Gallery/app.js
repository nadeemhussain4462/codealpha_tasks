const images = document.querySelectorAll(".gallery img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Get the modal ID from the image's data-bs-target attribute
    const modalId = image.getAttribute("data-bs-target");
    // Show the modal
    const modal = bootstrap.Modal.getOrCreateInstance(
      document.querySelector(modalId)
    );
    modal.show();
  });
});
