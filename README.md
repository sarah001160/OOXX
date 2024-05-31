# Tic-tac-toe 井字圈圈叉叉
[來自youtube的教學影片](https://www.youtube.com/watch?v=Y-GkMjUZsmM)

<!-- This content will not appear in the rendered MarkdownReadme.md寫法press兩次enter留下空白兩列,則可以換行 -->


先切出棋盤:  

HTML


```<div class="board" id="board"></div>```

#board的內層子元素<div class="cell">這個請寫9次　


``` <div class="cell" data-cell></div>```

.board的CSS設定: 

```   
width:100vw; /* view width 與視窗同寬 */

height:100vh; /* view height 與視窗同高 */
    
display:grid; /* 主軸預設 水平左到右 */
    
justify-content: center; /* 跟著主軸 排列置中 */

align-content: center;
    
justify-items:center;
    
align-items:center;  /* 跟著交叉軸 排列置中 */
    
grid-template-columns:repeat(3,auto);  / *每3個 div 成一列, 9個總共有三列 九宮格棋盤 */  
    
 ```



.cell 的 div 會形成總共有九格，(從左到右1、2、3，換行4、5、6，換行7、8、9)

第１、２、３個div上方沒有框線（CSS 設定 border-top:none;)  

第１、４、７個div左邊沒有框線（3n+1，n=0 結果１，n=1 結果4, n=2 結果7　／CSS設定border-left:none;)

第３、６、９個div右邊沒有框線條 (3n+3) （CSS設定border-right:none;)

第７、８、９個div下方沒有框線 （CSS 設定 border-bottom:none;)

```
:root{
/* CSS變數 */
--cell-size:100px; 
--mark-size:calc(var(--cell-size) * .9); 
}

```

```
.cell的CSS設定
    width:var(--cell-size);
    height:var(--cell-size);
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    cursor:pointer;    
```


．CSS變數命名規則

「兩個dash--」加「自命名cell」加「一個dash-」加「自命名size」 

--cell-size:值

.使用CSS變數的方式

 前方加上「var()」
 
 var(--cell-size)

.計算CSS變數的方式

 前方加上calc( 使用CSS變數方式 * 倍數)
 
 calc(var(--cell-size)* .9)
 
 
 
## 圈圈與叉叉，換邊下棋的設定

棋盤(九個 .cell )外圍有包著一個 .board 的 div, 從 .board 這個 div 下手設定換邊下棋

當這次換 O 下棋，.board 的元素中多加一個 .circle 的 classname

換 X 下棋時, .board 的元素中移除 .circle 的 classname  並加上classname「.x 」



## 圈圈與叉叉  圖形的製作 使用偽元素 ::before 與 ::after

圓形，一個黑色大圓、一個白色小圓 ，形成一個空心圓型(圈圈)

使用 ::before 及 ::after 製作圈圈圖形以及叉叉圖形

下過圈圈或叉叉的 .cell 格子，不得再重複下任一圈圈或叉叉


當 .cell 棋格裡有 .x 的 classname 時


設定該 .cell.x 的 ::before 及 ::after 元素，背景色皆為紅色(或你想要的顏色)

.cell.x::before 讓它移動45度角度  / 

```
.cell.x::before {
    transform: rotate(45deg);
}
```

.cell.x::after 讓它移動-45度角度 \ 

```
.cell.x::after {
    transform: rotate(-45deg);
}
```

這兩個線條可以形成一個叉叉 X






