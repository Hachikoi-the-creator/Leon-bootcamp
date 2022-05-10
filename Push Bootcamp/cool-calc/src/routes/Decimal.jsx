import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Decimal() {
  return (
    <div>
      <Navbar />
      <form>
        <input id="input1" type="text" placeholder="0" class="center-basic" />
        <div class="operation" id="operation">
          💀
        </div>
        <input id="input2" type="text" placeholder="0" class="center-basic" />
      </form>
      <section class="btns">
        <div id="clear">c</div>
        <div id="rest">-</div>
        <div id="sum">+</div>
        <div id="multiplication">*</div>
        <div id="division">/</div>
      </section>
      <form>
        <input
          id="show-result"
          type="text"
          placeholder="0"
          class="center-basic"
        />
      </form>
      <Footer />
    </div>
  );
}
