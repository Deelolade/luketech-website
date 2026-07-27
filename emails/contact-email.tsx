import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  location?: string;
  message: string;
}

export default function ContactEmail({
  firstName,
  lastName,
  email,
  phone,
  service,
  location,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New enquiry from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Enquiry</Heading>

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{firstName} {lastName}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          {phone && (
            <Section style={section}>
              <Text style={label}>Phone</Text>
              <Text style={value}>{phone}</Text>
            </Section>
          )}

          {service && (
            <Section style={section}>
              <Text style={label}>Service</Text>
              <Text style={value}>{service}</Text>
            </Section>
          )}

          {location && (
            <Section style={section}>
              <Text style={label}>Location</Text>
              <Text style={value}>{location}</Text>
            </Section>
          )}

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eaeaea",
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px",
};

const h1 = {
  color: "#071426",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 24px",
};

const section = {
  marginBottom: "16px",
};

const label = {
  color: "#64748b",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.1em",
  margin: "0 0 4px",
};

const value = {
  color: "#0f172a",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0",
};

const hr = {
  borderColor: "#eaeaea",
  margin: "24px 0",
};

const messageStyle = {
  color: "#0f172a",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};
