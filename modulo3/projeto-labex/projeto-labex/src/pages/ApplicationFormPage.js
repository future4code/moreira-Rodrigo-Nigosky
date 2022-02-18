import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

export const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const {form, onChange, cleanFields} = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
        trip: "",
    });

    const cadastrar = (event) => {
        event.preventDefault()
        console.log ("Formulario enviado!", form);
        cleanFields();
    };

    return (
        <div>
            <h1>APPLICATION FORM</h1>
            <form onSubmit={cadastrar}>                
                <input 
                    name={"name"} 
                    value={form.name} 
                    onChange={onChange} 
                    placeholder="Nome"
                    required
                    pattern={"^.{5,}"}
                    title={"Seu nome deve ter no mínimo 5 letras"}
                />
                <input 
                    name={"age"} 
                    value={form.age} 
                    onChange={onChange} 
                    placeholder="Idade"
                    required
                    type={"number"}
                    min ={18}
                />
                <input 
                    name={"applicationTex"} 
                    value={form.applicationTex} 
                    onChange={onChange} 
                    placeholder="Texto de sua candidatura"
                    required
                    pattern={"^.{30,}"}
                    title={"Sua candidatura deve ter no mínimo 30 caracteres"}
                />
                <input 
                    name={"profession"} 
                    value={form.profession} 
                    onChange={onChange} 
                    placeholder="Profissão"
                    required
                    pattern={"^.{10,}"}
                    title={"Sua profissão deve ter no mínimo 10 letras"}
                />
                <input 
                    name={"country"} 
                    value={form.country} 
                    onChange={onChange} 
                    placeholder="Escolha sua nação"
                    required  
                    pattern={"^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW|AFG|ALB|DZA|ASM|AND|AGO|AIA|ATA|ATG|ARG|ARM|ABW|AUS|AUT|AZE|BHS|BHR|BGD|BRB|BLR|BEL|BLZ|BEN|BMU|BTN|BOL|BIH|BWA|BVT|BRA|IOT|VGB|BRN|BGR|BFA|BDI|KHM|CMR|CAN|CPV|CYM|CAF|TCD|CHL|CHN|CXR|CCK|COL|COM|COD|COG|COK|CRI|CIV|CUB|CYP|CZE|DNK|DJI|DMA|DOM|ECU|EGY|SLV|GNQ|ERI|EST|ETH|FRO|FLK|FJI|FIN|FRA|GUF|PYF|ATF|GAB|GMB|GEO|DEU|GHA|GIB|GRC|GRL|GRD|GLP|GUM|GTM|GIN|GNB|GUY|HTI|HMD|VAT|HND|HKG|HRV|HUN|ISL|IND|IDN|IRN|IRQ|IRL|ISR|ITA|JAM|JPN|JOR|KAZ|KEN|KIR|PRK|KOR|KWT|KGZ|LAO|LVA|LBN|LSO|LBR|LBY|LIE|LTU|LUX|MAC|MKD|MDG|MWI|MYS|MDV|MLI|MLT|MHL|MTQ|MRT|MUS|MYT|MEX|FSM|MDA|MCO|MNG|MSR|MAR|MOZ|MMR|NAM|NRU|NPL|ANT|NLD|NCL|NZL|NIC|NER|NGA|NIU|NFK|MNP|NOR|OMN|PAK|PLW|PSE|PAN|PNG|PRY|PER|PHL|PCN|POL|PRT|PRI|QAT|REU|ROU|RUS|RWA|SHN|KNA|LCA|SPM|VCT|WSM|SMR|STP|SAU|SEN|SCG|SYC|SLE|SGP|SVK|SVN|SLB|SOM|ZAF|SGS|ESP|LKA|SDN|SUR|SJM|SWZ|SWE|CHE|SYR|TWN|TJK|TZA|THA|TLS|TGO|TKL|TON|TTO|TUN|TUR|TKM|TCA|TUV|VIR|UGA|UKR|ARE|GBR|UMI|USA|URY|UZB|VUT|VEN|VNM|WLF|ESH|YEM|ZMB|ZWE)$"}                 
                />
                <input 
                    name={"trip"} 
                    value={form.trip} 
                    onChange={onChange} 
                    placeholder="tripID"
                    required
                />
            <button>ENVIAR</button>
            </form>
            <p>
                <button onClick = {goBack}>VOLTAR</button>
            </p>
        </div>
    ) 
}