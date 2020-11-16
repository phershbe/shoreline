export default {
  container: {
    bg: 'background',
    borderColor: 'muted.2',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    paddingLeft: 3,
    'div > button:nth-of-type(n+2)': {
      marginLeft: 1,
    },
  },
  section: {
    paddingX: 6,
    paddingBottom: 6,
  },
  'header-nested': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    paddingLeft: 1,
    'div > button:nth-of-type(n+2)': {
      marginLeft: 1,
    },
  },
  'section-nested': {
    paddingX: 4,
    paddingBottom: 4,
  },
}
