        function dis(val)
        {
            document.getElementById("result").value+=val;
        }

      let r=0;
        function solve()
        {
            let x = document.getElementById("result").value;
            let y = eval(x);
              r=y;
            document.getElementById("result").value = y;
        }
        function clr()
        {
            document.getElementById("result").value = "";
        }

        function clr1() {
          document.getElementById("result").value=document.getElementById("result").value.slice(0, -1);
        }

        function ans() {
        document.getElementById("result").value =r;
        }
