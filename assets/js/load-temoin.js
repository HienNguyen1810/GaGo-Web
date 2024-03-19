const getObject = async (path) => {
  return new Promise((resolve) => {
    $.getJSON(path, (data) => {
      resolve(data);
    });
  });
};

const moveItemsToStart = (array, n) => {
  // Check if the array has enough items
  if (array.length < n) {
    console.error("Not enough items in the array");
    return;
  }

  // Remove first items
  let itemsToMove = array.splice(array.length - n, array.length);

  // Add the removed items to the beginning of the array
  array.unshift(...itemsToMove);

  return array;
};

const updateTemoinBySizeScreen = (array) => {
  const windowWidth = $(window).width();
  // if (windowWidth > 992) return moveItemsToStart(array, 10);
  // if (windowWidth < 479) return moveItemsToStart(array, 0);
  return array;
};

const executeAddTemoin = async () => {
  const [dataTemoins, dataLanguages] = await Promise.all([
    getObject("./assets/data/data.json"),
    getObject("./assets/data/dataLanguage.json"),
  ]);
  dataTemoin = updateTemoinBySizeScreen(dataTemoins);
  languageOptions = dataLanguages;
  temoins = dataTemoins
  
};

executeAddTemoin();
