import React, { Component } from "react";

export default class Calculator extends Component {
  componentDidMount = () => {
    var current, screen, output, limit, zero, period, operator;

    screen = document.getElementById("result");

    var elem = document.querySelectorAll(".num");

    var len = elem.length;

    for (var i = 0; i < len; i++) {
      elem[i].addEventListener(
        "click",
        function() {
          let num = this.value;

          output = screen.innerHTML += num;

          limit = output.length;

          if (limit > 16) {
            alert("Sorry no more input is allowed");
          }
        },
        false
      );
    }

    document.querySelector(".zero").addEventListener(
      "click",
      function() {
        zero = this.value;

        if (screen.innerHTML === "") {
          output = screen.innerHTML = zero;
        } else if (screen.innerHTML === output) {
          output = screen.innerHTML += zero;
        }
      },
      false
    );

    document.querySelector(".period").addEventListener(
      "click",
      function() {
        period = this.value;

        if (screen.innerHTML === "") {
          output = screen.innerHTML = screen.innerHTML.concat("0.");
        } else if (screen.innerHTML === output) {
          screen.innerHTML = screen.innerHTML.concat(".");
        }
      },
      false
    );

    document.querySelector("#eqn-bg").addEventListener(
      "click",
      function() {
        if (screen.innerHTML === output) {
          screen.innerHTML = eval(output);

          output = screen.innerHTML;
        } else {
          screen.innerHTML = "";
        }
      },
      false
    );

    document.querySelector("#delete").addEventListener(
      "click",
      function() {
        screen.innerHTML = "";
      },
      false
    );

    var elem1 = document.querySelectorAll(".operator");

    var len1 = elem1.length;

    for (var i = 0; i < len1; i++) {
      elem1[i].addEventListener(
        "click",
        function() {
          operator = this.value;

          if (screen.innerHTML === "") {
            screen.innerHTML = screen.innerHTML.concat("");
          } else if (output) {
            screen.innerHTML = output.concat(operator);
          }
        },
        false
      );
    }
  };
  render() {
    return (
      <div id="calculator">
        <div id="background">
          <div id="result" />

          <div id="main">
            <div id="first-rows">
              <button className="del-bg" id="delete">
                Del
              </button>
              <button value="%" className="btn-style operator opera-bg fall-back">
                %
              </button>
              <button value="+" className="btn-style opera-bg value align operator">
                +
              </button>
            </div>

            <div class="rows">
              <button value="7" className="btn-style num-bg num first-child">
                7
              </button>
              <button value="8" className="btn-style num-bg num">
                8
              </button>
              <button value="9" className="btn-style num-bg num">
                9
              </button>
              <button value="-" className="btn-style opera-bg operator">
                -
              </button>
            </div>

            <div className="rows">
              <button value="4" className="btn-style num-bg num first-child">
                4
              </button>
              <button value="5" className="btn-style num-bg num">
                5
              </button>
              <button value="6" className="btn-style num-bg num">
                6
              </button>
              <button value="*" className="btn-style opera-bg operator">
                x
              </button>
            </div>

            <div className="rows">
              <button value="1" className="btn-style num-bg num first-child">
                1
              </button>
              <button value="2" className="btn-style num-bg num">
                2
              </button>
              <button value="3" className="btn-style num-bg num">
                3
              </button>
              <button value="/" className="btn-style opera-bg operator">
                /
              </button>
            </div>

            <div className="rows">
              <button value="0" className="num-bg zero" id="delete">
                0
              </button>
              <button value="." className="btn-style num-bg period fall-back">
                .
              </button>
              <button value="=" id="eqn-bg" className="eqn align">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
