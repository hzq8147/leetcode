/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let column=[];
  let row=[];
  column[0]=[];
  row[0]=[];
  let columnLength=0;
  let rowLength=0;
  let tmp=0;

  let now=0; //0 colmun 1 row;
  let i=0;
  while(i<s.length){
  	let nowLength;
  	if (now == 0){
  		nowLength=numRows;
  	}else{
  		nowLength=numRows - 2;
  		if (nowLength <=0) nowLength = 0;
  	}
  	if(tmp<nowLength){
  		if(now==0){
  			column[columnLength].push(s.charAt(i));
  			tmp++;
  			i++;
  		}else{
  			row[rowLength].push(s.charAt(i));
  			tmp++;
  			i++;
  		}
  	}
  	if(tmp>=nowLength){
	  	if(now == 0){
	  			columnLength++;
	  			column[columnLength]=[];
	  			now=1;
	  		}else{
	  			rowLength ++;
	  			row[rowLength]=[];
	  			now =0;
	  		}
	  		tmp = 0;
  	}
  }  
  let result='';
  for (let i=0;i<numRows;i++){
  	for (let j=0;j<column.length;j++){
  		let colStr="";
  		if (i<column[j].length)
  			colStr=column[j][i];
  		let rowStr="";
  		if (row[j] && row[j][numRows - 2 - i]!=undefined){
  			rowStr=row[j][numRows - 2 - i];
  		}
  		result=result+colStr+rowStr;
  	}
 }
 return result;
};
convert("ABCDE",4);

/**
* 遍历存一个行数组，一个列数组，再按要求输出
* 初见做法
*/