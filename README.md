# Tic-tac-toe 井字圈圈叉叉
[來自youtube的教學影片](https://www.youtube.com/watch?v=Y-GkMjUZsmM)

<!-- This content will not appear in the rendered MarkdownReadme.md寫法press兩次enter留下空白兩列,則可以換行
 -->


先切出棋盤:  

Html寫出一個 ```<div class="board" id="board"></div>```

#board的內層子元素請寫出9次　``` <div class="cell" data-cell></div>```

.board的CSS設定 

```   
width:100vw; /*view width*/
    
    height:100vh; /*view height*/
    
    display:grid;
    
    justify-content: center;/*水平左到右排列置中*/
    
    align-content: center;/*垂直上到下排列置中*/
    
    justify-items:center;/*物件本身從左到右置中*/
    
    align-items:center; /*物件本身從上到下置中*/
    
    grid-template-columns:repeat(3,auto) /*每3個div成一列,9個總共有三列 九宮格棋盤*/  
    ```



.cell的div會形成總共有九格，(從左到右1,2,3,換行4,5,6換行7,8,9)

第１，２，３個上方沒有框線  

第１，４，７個左邊沒有框線（3n+1，ｎ＝０結果１，n=1結果4, n=2結果7)

第３，６，９個右邊沒有框線條 (3n+3)

第７，８，９個下方沒有框線


.cell的CSS設定

```
.cell{
    width:var(--cell-size);
    height:var(--cell-size);
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    cursor:pointer;
}

:root{/*Css變數*/
    --cell-size:100px;
    --mark-size:calc(var(--cell-size) * .9);
}
```


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
 ```
 

## 圈圈與叉叉，換邊下棋的設定


棋盤(九個.cell)外圍有包著一個.board的div,從.board這個div下手設定換邊下棋

當這次換O下棋，.board的元素中多加一個.circle的classname

換X下棋時,.board的元素中移除.circle的classname  並加上.x的classname



## 圈圈與叉叉  圖形的製作 使用偽元素::before 與::after

圓形  一個黑色大圓 一個白色小圓  形成一個空心圓型(圈圈)

使用::before 及::after 製作圈圈圖形以及叉叉圖形

下過圈圈或叉叉的.cell格子  不得再重複下任一圈圈或叉叉


當.cell棋格裡有.x 的classname時


設定該.cell.x的 ::before及::after元素，背景色皆為紅色(或其他你想要的顏色)

.cell.x::before移動45度角度 / 

 
.cell.x::after移動-45度角度\ 


這兩個線條可以形成一個叉叉 X


*使用css屬性transform:
值分別為rotate(45deg)及rotate(-45deg)





