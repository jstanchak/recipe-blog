import { useState, useEffect } from 'react';
import MainRecipe from '../components/MainRecipe/MainRecipe'
import { RECIPES } from '../data'

export default function Recipe({selectedRecipe}) {

  return (
    <>
        {selectedRecipe ? <MainRecipe selectedRecipe={selectedRecipe} /> : null }
    </>
  )
}