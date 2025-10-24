function getUserId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

function getUserName(userId) {
  return new Promise((resolve, reject) => {
    if (userId == 1) {
      resolve("Alisa");
    } else {
      reject("User tapilmadi");
    }
  });
}

async function run() {
  try {
    const userId = await getUserId();
    const userName = await getUserName(userId);

    console.log(userName);
  } catch (error) {
    console.log("Xeta oldu " + error);
  }
}

run();
