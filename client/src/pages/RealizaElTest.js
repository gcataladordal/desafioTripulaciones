import React, { useState } from "react";


function RealizaElTest() {

    const empezarTest = () => {
        window.location.href = "/testusuario"
    }

    return (
        <div className="Log-in"> 
            <button type="button" className="Btn-Default-Login" onClick={empezarTest}><span class="Texto-Blanco-Login">
  Empezar test
</span></button>
        </div>
    )
}

export default RealizaElTest