import React from 'react'
import { Button, Form, Grid, Header as SemanticHeader, Message, Segment } from 'semantic-ui-react'
import Header from '../../components/Header'

function LoginUI({ form: { onChange, form,
  loginFormValid, onSubmit, loading, error
} }) {

  return (
    <div>
      <Header></Header>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Login here</SemanticHeader>

          <Segment>
            <Form>
              {error &&
                <Message content={error?.detail} negative />
              }

              <Form.Field>
                <Form.Input placeholder="Username"
                  value={form.username || ""}
                  onChange={onChange}
                  label="Username" name="username"></Form.Input>
              </Form.Field>


              <Form.Field>
                <Form.Input type="password" placeholder="Password"
                  value={form.password || ""}
                  onChange={onChange}
                  name="password" label="Password"></Form.Input>
              </Form.Field>


              <Button loading={loading}
                onClick={onSubmit} disabled={loginFormValid || loading}
                fluid primary type="submit">Submit</Button>
            </Form>

          </Segment>
        </Grid.Column>
      </Grid>

    </div>
  )
}

export default LoginUI;
