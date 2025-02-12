import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@src/theme/ThemeProvider";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });
import "react-phone-input-2/lib/style.css";

function useForm({ initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    },
    handlePhoneChange(value) {
      setValues({ ...values, phoneNumber: value });
    },
    resetForm() {
      setValues(initialValues);
    },
  };
}

interface ContactFormProps {
  menuIsVisible?: boolean;
  setMenuIsVisible?: (value: boolean) => void;
}

export default function ContactForm({
  menuIsVisible,
  setMenuIsVisible,
}: ContactFormProps) {
  const form = useForm({
    initialValues: {
      userName: "",
      companySegment: "",
      phoneNumber: "",
      userEmail: "",
      userMessage: "",
    },
  });

  const theme = useTheme();

  return (
    <Box>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Estamos enviando os dados do formulário");

          alert("Cadastro realizado com sucesso!");

          /*
          fetch("/api/newsletter/optin", {
            method: "POST",
            body: JSON.stringify(form.values),
            headers: {
              "Content-Type": "application/json", //MIME type
            },
          }).then(async (serverResponse) => {
            console.log(await serverResponse.json());
          });
          */
        }}
      >
        <Box
          styleSheet={{
            alignItems: "start",
            width: "100%",
            padding: "16px",
            marginTop: "24px",
          }}
        >
          <Text variant="titlePage">Contato</Text>
          <Box
            styleSheet={{
              marginTop: { xs: "20px", xl: "30px" },
              width: { xs: "358px", lg: "100%" },
            }}
          >
            <Text>
              Quer saber mais sobre as nossas soluções? <br /> Entre em
              contato,estamos à disposição para te ajudar!
            </Text>
          </Box>

          <Box
            styleSheet={{
              marginTop: { xs: "20px", xl: "30px" },
            }}
          >
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "flex-start", lg: "space-between" },
                width: { lg: "754px" },
              }}
            >
              <Box
                styleSheet={{
                  marginTop: { xs: "20px", lg: "0px" },
                  width: { xs: "100%", lg: "358px" },
                }}
              >
                <Text
                  variant="bodyEmphasis"
                  styleSheet={{
                    marginBottom: "8px",
                  }}
                >
                  Nome*
                </Text>
                <TextField
                  placeholder="Digite o seu nome"
                  value={form.values.userName}
                  onChange={form.handleChange}
                  name="userName"
                  id="userName"
                />
              </Box>
              <Box
                styleSheet={{
                  marginTop: { xs: "20px", lg: "0px" },
                  width: { xs: "100%", lg: "358px" },
                }}
              >
                <Text
                  variant="bodyEmphasis"
                  styleSheet={{
                    marginBottom: "8px",
                  }}
                >
                  Ramo da sua empresa*
                </Text>
                <TextField
                  placeholder="Qual é o ramo que você trabalha?"
                  value={form.values.companySegment}
                  onChange={form.handleChange}
                  name="companySegment"
                  id="companySegment"
                />
              </Box>
            </Box>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "flex-start", lg: "space-between" },
                width: { lg: "754px" },
                marginTop: { lg: "24px" },
              }}
            >
              <Box
                styleSheet={{
                  marginTop: { xs: "20px", lg: "0px" },
                  width: { xs: "100%", lg: "358px" },
                }}
              >
                <Text
                  variant="bodyEmphasis"
                  styleSheet={{
                    marginBottom: "8px",
                  }}
                >
                  Telefone*
                </Text>
                <PhoneInput
                  country={"br"} // Default country
                  value={form.values.phoneNumber}
                  onChange={form.handlePhoneChange} // Custom handler
                  inputStyle={{
                    borderRadius: "8px",
                    height: "46px",
                    width: "100%",
                    borderWidth: "0.5px",
                    borderColor: theme.colors.knokout.lightGray,
                    backgroundColor: theme.colors.knokoutDarker.navy,
                    color: theme.colors.knokout.lightGray,
                    fontSize: "12pt",
                    fontFamily: "Maven Pro",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box
                styleSheet={{
                  marginTop: { xs: "20px", lg: "0px" },
                  width: { xs: "100%", lg: "358px" },
                }}
              >
                <Text
                  variant="bodyEmphasis"
                  styleSheet={{
                    marginBottom: "8px",
                  }}
                >
                  Email*
                </Text>
                <TextField
                  value={form.values.userEmail}
                  onChange={form.handleChange}
                  name="userEmail"
                  id="userEmail"
                />
              </Box>
            </Box>
            <Box
              styleSheet={{
                marginTop: { xs: "20px", lg: "24px" },
                width: { lg: "754px" },
              }}
            >
              <Text
                variant="bodyEmphasis"
                styleSheet={{
                  marginBottom: "8px",
                }}
              >
                Mensagem*
              </Text>
              <TextArea
                value={form.values.userMessage}
                onChange={form.handleChange}
                name="userMessage"
                id="userMessage"
                rows="12"
                cols="33"
              />
            </Box>
          </Box>

          <Box
            styleSheet={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              width: "100%",
              marginTop: { xs: "40px", lg: "50px" },
            }}
          >
            <Box>
              <Button
                variant="outlined"
                colorVariant="lightGray"
                styleSheet={{ marginTop: "16px" }}
                onClick={() => setMenuIsVisible(false)}
              >
                Voltar
              </Button>
            </Box>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: { xs: "240px", lg: "260px" },
                marginTop: { xs: "20px", lg: "0px" },
              }}
            >
              <Button
                variant="outlined"
                colorVariant="lightGray"
                styleSheet={{ marginTop: "16px" }}
                onClick={form.resetForm}
              >
                Limpar
              </Button>
              <Button
                styleSheet={{
                  marginTop: "16px",
                  padding: "18px 30px",
                }}
                type="submit"
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

/** Form UI */
interface TextFieldProps {
  placeholder?: string;
  value?: string;
  name: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField(props: TextFieldProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        width: "100%",
      }}
    >
      <BaseComponent
        as="input"
        {...props}
        styleSheet={{
          borderWidth: "0.5px",
          borderColor: theme.colors.knokout.lightGray,
          borderRadius: "8px",
          padding: "12px",
          width: "100%",
          height: "46px",
          backgroundColor: theme.colors.knokoutDarker.navy,
          color: theme.colors.knokout.lightGray,
          fontSize: "12pt",
          fontFamily: "Maven Pro",
          cursor: "pointer",
          ...(function () {
            const hoverFocusStyles = { borderWidth: "1px" };
            return {
              hover: hoverFocusStyles,
              focus: hoverFocusStyles,
            };
          })(),
        }}
      />
    </Box>
  );
}

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  name: string;
  rows: string;
  cols: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea(props: TextAreaProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        maxWidth: "754px",
        width: "100%",
      }}
    >
      <BaseComponent
        as="textarea"
        {...props}
        onChange={(event) => props.onChange?.(event)}
        styleSheet={{
          borderWidth: "0.5px",
          borderColor: theme.colors.knokout.lightGray,
          borderRadius: "8px",
          padding: "12px",
          width: "100%",
          backgroundColor: theme.colors.knokoutDarker.navy,
          color: theme.colors.knokout.lightGray,
          fontSize: "12pt",
          fontFamily: "Maven Pro",
          cursor: "pointer",
          ...(function () {
            const hoverFocusStyles = { borderWidth: "1px" };
            return {
              hover: hoverFocusStyles,
              focus: hoverFocusStyles,
            };
          })(),
        }}
      />
    </Box>
  );
}

interface LabelProps {
  for?: string;
  children?: React.ReactNode;
}

function Label(props: LabelProps) {
  return (
    <Box>
      <BaseComponent as="label" {...props} />
    </Box>
  );
}
