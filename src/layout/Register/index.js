import React from 'react'
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import Header from '../../components/Header'

function RegisterUI({ form: { onChange, form, registerFormValid } }) {

  return (
    <div>
      <Header></Header>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup here</SemanticHeader>

          <Segment>
            <Form>
              <Form.Field>
                <Form.Input placeholder="Username"
                  value={form.username || ""}
                  onChange={onChange}
                  label="Username" name="username"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input placeholder="First Name"
                  value={form.firstName || ""}
                  onChange={onChange}
                  name="firstName" label="First Name"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input placeholder="Last Name"
                  value={form.lastName || ""}
                  onChange={onChange}
                  name="lastName" label="Last Name"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input type="email" placeholder="Email"
                  value={form.email || ""}
                  onChange={onChange}
                  name="email" label="Email"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input type="password" placeholder="Password"
                  value={form.password || ""}
                  onChange={onChange}
                  name="password" label="Password"></Form.Input>
              </Form.Field>


              <Button disabled={registerFormValid} fluid primary type="submit">Submit</Button>
            </Form>

          </Segment>
        </Grid.Column>
      </Grid>

    </div>
  )
}

export default RegisterUI
