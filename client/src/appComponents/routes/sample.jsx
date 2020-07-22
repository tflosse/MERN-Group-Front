const CharacterEdit = (props) => {
    console.log('CharacterEdit - props', props)
    const [comment, setComment] = useState({username: '', commentBody: ''})
    const [isUpdated,setIsUpdated] = useState(false)
    useEffect( () => {
         const makeAPICall = async () => {
        try {
            const response = await axios(`${ideasApi}/ideas/${props.match.params.id}`)
            setComment(response.data.comments)
          } catch (err) {
            console.error(err)
          }
     }
    makeAPICall()
    }, [])
     const handleChange = event => {
          setComment({
            ...comment,
            [event.target.name]: event.target.value
          })
      }
      const handleSubmit = event => {
          event.preventDefault()
          axios({
              url: `${ideasApi}/comment/${props.match.params.id}`,
              method: 'PUT',
              data: character
          })
              .then(() => setIsUpdated(true))
              .catch(console.error)
      }
          if (isUpdated) {
              return <Redirect to={`/characters/${props.match.params.id}`} />
          }
          return (
              <Layout>
                  <CharacterForm
                      character={character}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      cancelPath={`/characters/${props.match.params.id}`}
                  />
              </Layout>
          )
  }