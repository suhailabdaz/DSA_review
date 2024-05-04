class node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class binarysearchtree{
    constructor(){
        this.root=null
    }
    insertion(value,root=this.root){
        let newnode=new node(value)
        if(!root){
            this.root=newnode
            return
        }
        if(root.value>value){
            if(!root.left){
                root.left=newnode
            }else{
            this.insertion(value,root.left)
            }
        }else{
            if(!root.right){
                root.right=newnode
            }else{
            this.insertion(value,root.right)
            }
        }
    }
    inorder(node=this.root){
        if(node){
        this.inorder(node.left)
        console.log(node.value);
        this.inorder(node.right)
        }
    }
    preorder(node=this.root){
        if(node){
            console.log(node.value);
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    postorder(node=this.root){
        if(node){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value);
        }
    }
    max(node){
        while(node.right){
            node=node.right
        }
        return node
    }
    min(node){
        while(node.left){
            node=node.left
        }
        return node
    }
    delete(value,node=this.root){
        if(!node){
            return
        }
        if(value<node.value){
            node.left = this.delete(value,node.left)
        }else if(value>node.value){
            node.right = this.delete(value,node.right)
        }else{
            if(!node.right && !node.left){
                return null
            }else{
                if(!node.right){
                    return node.left
                }else if(!node.left){
                    return node.right
                }else{
                    const rightmin = this.min(node.right)
                    node.value= rightmin.value
                    node.right = this.delete(rightmin.value,node.right)
                }
            }
        }
        return node
    }
    contains(value,node=this.root){
        if(node == null){
            return false
        }else{
            if(node.value == value){
                return true
            }else if(node.value > value){
                return this.contains(value,node.left)
            }else{
                return this.contains(value,node.right)
            }
        }
    }
    
}

const tree = new binarysearchtree()
tree.insertion(1)
tree.insertion(5)
tree.insertion(-2)
tree.insertion(-99)
tree.delete(1)
tree.inorder()
console.log(tree.contains(66666666666))


// tree.preorder()
// tree.postorder() 
