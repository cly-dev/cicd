/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-08-16 14:28:32
 * @Description: 
 */
function setObj(obj){
		return Object.keys(obj).reduce((pre, item) => {
           
            if(obj[item] && typeof obj[item]==='object' && !Array.isArray(obj[item])){
				return {...pre,[item]:setObj(obj[item])};
			}
            
			 if (typeof obj[item] !== 'function') {
				return {
					...pre,
					[item]: obj[item],
				}
			}
            
			
			return pre
		}, {})
	}
const obj={
    name:'勇',
    age:18,
    date:undefined,
    
    run:()=>{

    },
    friend1:{
        name:'1',
        age:18,
    date:undefined,

        run:()=>{}
    },
     friend2:{
        name:'1',
        age:18,
     date:undefined,

        run:()=>{},
        swiming:()=>{},
        play:()=>{}
    }
}
console.log(setObj(obj))