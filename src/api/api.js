//Seçenekler arasında 4 şıktan 1 tanesi doğru diğerleri yanlış olduğu için ;
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  try {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(url);
    const data = await response.json();

    // Kontrol: API'den gelen data'nın varlığını ve results dizisinin varlığını kontrol et
    if (!data || !data.results) {
      throw new Error("Quiz data not available.");
    }

    return data.results.map((dt) => ({
      ...dt,
      answers: shuffleArray([
        ...dt.incorrect_answers,
        dt.correct_answer,
      ]).filter((answer) => answer !== undefined), // undefined'ları filtrele
    }));
  } catch (error) {
    console.error("Error fetching or processing quiz data:", error);
    throw error;
  }
};
