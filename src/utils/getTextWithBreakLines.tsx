const getTextWithBreakLines = (line: string) => {
  return line.split("<br/>").map((comment, ind) => {
    if (ind !== 0) return <> <span key={ind}>{comment}</span><br/> </>

    return <> {comment} <br/> </>
  })
}

export default getTextWithBreakLines;
