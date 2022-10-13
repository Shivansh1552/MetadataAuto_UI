export interface MetaData {
    id: string,
    name: string,
    iPackName: string,
    version: number,
    extraTransferFields: ExtraTransferField[]
    sections: Section[]
}

interface ExtraTransferField {
    key: string,
    value: string
}

interface Section {
    steps?: Step[]
}

interface Step {
    description: string,
    componentName: string,
    name: string,
    title: string,
    config: StaticConfig | StepConfig
}

export interface StepConfig {
    rows?: StepRow[],
    valuePopulatedApi?: Connection
}

interface StaticConfig extends StepConfig{
    content: string,
    headers: ConfigHeader[],
    type: 'static'
}

interface ApiDisplayConfig extends StepConfig {
   ddLabel: string,
   transferFieldKey: string,
   sourceApi: ConnectionItem,
   displayItems: DisplayItem[],
   testConfiguration: boolean,
   testApi: ConnectionItem
}

interface ConfigHeader {
    templateName: string,
    headerString: string
}

interface StepRow {
    input: StepInput,
    label: string,
    description: string
}

interface StepInput {
    hint?: string,
    name: string,
    placeholder?: string,
    type: string,
    validations?: any,
    defaultValue?: any,
    saveValueAsObjectConfiguration?: any 
}

export interface Connection {
    authType:string,
    url: string
}

interface ConnectionItem extends Connection {
    path:string,
    idField:string,
    labelField:string
}

interface DisplayItem {
    fieldName: string,
    label: string,
    secure: boolean
}
