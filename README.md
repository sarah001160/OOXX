# Tic-tac-toe-OOXX
來自youtube的教學影片

<!-- This content will not appear in the rendered MarkdownReadme.md寫法press兩次enter留下空白兩列,則可以換行
 -->


先切出棋盤:  用到CSS grid格線，切一個 井 形狀總共有九格，

１，２，３上方沒有框線  

１，４，７左邊沒有（3n+1，ｎ＝０結果１，n=1結果4, n=2結果7)

3,6,右邊沒有框線條 (3n+3)

7,8,9下方沒有框線


###換邊的設定


棋盤的classname命名為.board

當這次換圈圈下棋，.board的元素中多加一個.circle的classname

換叉叉下棋時,.board的元素中移除.circle的classname  並加上.x的classname


圈圈的製作 圓形,一個白的大圈 一個黑的小圈,形成一個圈圈

使用::before 及::after 製作圈圈圖形以及叉叉圖形

下過ＯＯ或ＸＸ的格子，不得在重複下ＯＯ或ＸＸ



