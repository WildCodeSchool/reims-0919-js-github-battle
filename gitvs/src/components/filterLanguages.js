const languagesIn = (repos) => repos.reduce((acc, repo) => (
  acc.filter((repoInAcc) => repoInAcc.language === repo.language).length
    ? acc.map(
      (repoInAcc) => (
        repoInAcc.language === repo.language
          ? { ...repoInAcc, count: repoInAcc.count + 1 }
          : repoInAcc
      ),
    )
    : [
      ...acc,
      {
        language: repo.language,
        count: 1,
      },
    ]
), [])

const maxIn = (languages) => languages.reduce((result, language) => {
  if (language.count >= result.count) {
    return { count: language.count, winnerLanguage: language.language }
  }
  return result
}, { count: 0, winnerLanguage: null }).winnerLanguage

const filterLanguages = (repos) => {
  const languages = languagesIn(repos)
  return maxIn(languages)
}

export default filterLanguages
