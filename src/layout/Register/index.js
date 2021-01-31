import React from 'react'
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import Header from '../../components/Header'

function RegisterUI({ form: { onChange, form,
  registerFormValid, onSubmit, loading,
  FieldErrors } }) {

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
                  error={FieldErrors.username && {
                    content: FieldErrors.username,
                    pointing: 'below'
                  }}
                  label="Username" name="username"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input placeholder="First Name"
                  value={form.first_name || ""}
                  onChange={onChange}
                  error={FieldErrors.first_name && {
                    content: FieldErrors.first_name,
                    pointing: 'below'
                  }}
                  name="first_name" label="First Name"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input placeholder="Last Name"
                  value={form.last_name || ""}
                  onChange={onChange}
                  error={FieldErrors.last_name && {
                    content: FieldErrors.last_name,
                    pointing: 'below'
                  }}
                  name="last_name" label="Last Name"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input type="email" placeholder="Email"
                  value={form.email || ""}
                  onChange={onChange}
                  error={FieldErrors.email && {
                    content: FieldErrors.email,
                    pointing: 'below'
                  }}
                  name="email" label="Email"></Form.Input>
              </Form.Field>

              <Form.Field>
                <Form.Input type="password" placeholder="Password"
                  value={form.password || ""}
                  onChange={onChange}
                  error={FieldErrors.password && {
                    content: FieldErrors.password,
                    pointing: 'below'
                  }}
                  name="password" label="Password"></Form.Input>
              </Form.Field>


              <Button loading={loading}
                onClick={onSubmit} disabled={registerFormValid || loading}
                fluid primary type="submit">Submit</Button>
            </Form>

          </Segment>
        </Grid.Column>
      </Grid>

    </div>
  )
}

export default RegisterUI
