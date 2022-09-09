class father{

  beard(){

    console.log("Both have beards")
  }
  hair(){
    console.log("Son has more")
  }


}

class son extends father{

    prop(){
        super.beard()
        super.hair()
    }
}

var obj = new son
obj.prop()