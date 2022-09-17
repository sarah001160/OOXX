# Tic-tac-toe-OOXX
來自youtube的教學影片

<!-- This content will not appear in the rendered MarkdownReadme.md寫法press兩次enter留下空白兩列,則可以換行
 -->


先切出棋盤:  用到CSS grid格線，切一個 井 形狀總共有九格，

１，２，３上方沒有框線  

１，４，７左邊沒有框線（3n+1，ｎ＝０結果１，n=1結果4, n=2結果7)

３，６，９右邊沒有框線條 (3n+3)

７，８，９下方沒有框線


## 圈圈與叉叉，換邊的設定


棋盤的classname命名為.board

當這次換圈圈下棋，.board的元素中多加一個.circle的classname

換叉叉下棋時,.board的元素中移除.circle的classname  並加上.x的classname



## 圈圈的與叉叉  圖形的製作,使用偽元素::before 與::after

圓形,一個白的大圈 一個黑的小圈,形成一個空心圈型

使用::before 及::after 製作圈圈圖形以及叉叉圖形

下過ＯＯ或ＸＸ的格子，不得在重複下ＯＯ或ＸＸ


當.cell棋格裡有.x classname時


設定該.cell.x的 ::before及::after元素，背景色皆為紅色(或其他你想要的顏色)

.cell.x::before移動45度角度 / 

 
.cell.x::after移動-45度角度\ 


這兩個線條可以形成一個叉叉 X


*使用css屬性transform:
值分別為rotate(45deg)及rotate(-45deg)





