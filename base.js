AFRAME.registerComponent('base', {
    schema: {
      radius:{type:"number", default:150},
      height:{type:"number", default:3}
    },
    init: function () {
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.datta.radius,
            height:this.data.height
        })
        this.el.setAttribute("material",{color:"#1769aa"})
    },

    update:function(){
        window.addEventListener("click", e=>{
            this.data.clickCounter= this.data.clickCounter+1;
            if(this.data.clickCounter === 1){
                const rotation = {x:0, y:20, z:0}
                this.el.setAttribute("rotation", rotation)
            }
            else if(this.data.clickCounter === 2)
            {
                const rotation = {x:0, y:100, x:0}
            }
        })

        var pos=this.el.getAttribute("position");
        pos.y=pos.y+this.data.moveY
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
    });

