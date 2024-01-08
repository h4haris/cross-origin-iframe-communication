const toggleColorMode = () => {
  if (colorMode === "light") {
    colorMode = "dark";
    document.body.classList.add(colorMode);
    document.body.classList.remove("light");
  } else {
    colorMode = "light";
    document.body.classList.add(colorMode);
    document.body.classList.remove("dark");
  }
};

const toggleTheme = (type) => {
  const nextColorMode = colorMode === "light" ? "dark" : "light";
  toggleColorMode();
  postMessage({
    type: type,
    value: nextColorMode,
  });
};