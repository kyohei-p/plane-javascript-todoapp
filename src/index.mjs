import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  console.log(li);

  //　button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {

    //完了ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    // div以下を初期化
    addTarget.textContent = null;
    
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText  = "戻す";

    //　押された戻すボタンの親タグ（div）を完了リストから削除
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

    // テキスト取得
    const text = backButton.parentNode.firstElementChild.innerText;
    createIncompleteList(text);
    })

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

  });

  //　button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  })
  console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
}

document
.getElementById('add-button')
.addEventListener("click", () => onClickAdd())