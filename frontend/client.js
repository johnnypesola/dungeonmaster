const getRoom = async (roomNum) => {
  const response = await fetch("http://localhost:3000/api/room/" + roomNum);
  return await response.json();
};

const setDescription = (description) => {
  const descritionEl = document.querySelector(".room-info");
  descritionEl.innerHTML = description;
};

const updateHtmlWithRoomData = (room) => {
  setDescription(room.description);

  if (room.N) {
    console.log("got N");
    // enable N button and attach right eventhandler to it.
    const arrowN = document.querySelector(".arrow-N");
    arrowN.addEventListener("click", async (e) => {
      const room = await getRoom(firstRoom.N.to_room);
    });
  }
  if (room.E) {
    console.log("got E");
  }
  if (room.S) {
    console.log("got S");
  }
  if (room.W) {
    console.log("got W");
  }
};

const initWithFirstRoom = () => {
  const firstRoomPromise = getRoom(0);
  firstRoomPromise.then((firstRoom) => {
    console.log(firstRoom);
    updateHtmlWithRoomData(firstRoom);
  });
};

initWithFirstRoom()