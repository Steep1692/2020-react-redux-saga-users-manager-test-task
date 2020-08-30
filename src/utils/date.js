const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const date = {
  /**
   * Returns date in format 'dd mm yy'
   * @param{string} date
   * @return {string}
   */
  formatBirthday: (date) => {
    const dateObject = new Date(date)

    const year = dateObject.getFullYear()
    const month = monthNames[dateObject.getMonth()]
    const day = dateObject.getDate()

    return `${day} ${month} ${year}`
  },
}

export default date