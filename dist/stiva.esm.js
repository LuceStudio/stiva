export default class Stiva{constructor(a={}){this.stores=a,this.context=new EventTarget}update(a,b){let c=b(this.stores[a]);this.stores[a]=c,this.dispatch(a)}dispatch(a){this.context.dispatchEvent(new CustomEvent(`stiva-${a}`,{detail:this.stores[a]}))}dispatchAll(){Object.keys(this.stores).forEach(a=>this.dispatch(a))}listen(a,b){const c=({detail:a})=>b(a);return this.context.addEventListener(`stiva-${a}`,c),c}detach(a,b){this.context.removeEventListener(`stiva-${a}`,b)}}