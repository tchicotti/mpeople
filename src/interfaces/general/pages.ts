export class Pages {
    title: string
    component?: any
    command?: { methodName: string, methodParam: any }
    childrens?: Array<Pages>
    icon?: string

    constructor(title?: string, component?: any, icons?: string, command?: { methodName: string, methodParam: any }, childrens: Array<Pages> = []) {
        this.title      = title
        this.component  = component
        this.command    = command
        this.icon       = icons
        this.childrens  = childrens
    }

    hasChildrens(): boolean {
        return this.childrens.length > 0
    }
}