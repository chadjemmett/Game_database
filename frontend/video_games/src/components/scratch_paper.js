
        {this.state.games.map(item => 
          <Game key={item.id} gameData={item} setFavorite={this.setFavorite}/>
        )}
    <Form onSubmit={props.handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' value={props.title} onChange={props.handleChange} />
        <Form.Label>Release Date</Form.Label>
        <Form.Control type='text' value={props.release_year} onChange={props.handleChange} />
        <Form.Label>Platform</Form.Label>
        <Form.Control type='text' value={props.platform} onChange={props.handleChange} />
        <Form.Label>Genre</Form.Label>
        <Form.Control type='text' value={props.genre} onChange={props.handleChange} />
        <Form.Label>Publisher</Form.Label>
        <Form.Control type='text' value={props.publisher} onChange={props.handleChange} />
        <Form.Label>Developer</Form.Label>
        <Form.Control type='text' value={props.developer} onChange={props.handleChange} />
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' value={props.description} onChange={props.handleChange} />
      </Form.Group>
      <Button type="submit" onSubmit={props.handleSubmit}>Submit </Button>

    </Form>
