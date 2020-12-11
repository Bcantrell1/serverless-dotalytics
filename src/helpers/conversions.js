function convertIdToImage(id, list) {
    let entries = Object.entries(list[0]);
    for (let i = 0; i < entries.length; i++) {
      if (id == entries[i][1].id) {
        return entries[i][1].img;
      }
    }
}

function winRate(wins, loss) {
    return Math.round((loss / (wins + loss)) * 100);
  }

export default { convertIdToImage, winRate };