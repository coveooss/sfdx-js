// Generated on August 8th 2017, 4:54:51 pm. DO NOT MODIFY
import { ICommandExecutioner } from "../core/commandExecutioner"
import { Limits } from "./limits"
import { Lightning } from "./lightning"
import { Data } from "./data"
import { Apex } from "./apex"
import { Doc } from "./doc"
import { Visualforce } from "./visualforce"
import { Mdapi } from "./mdapi"
import { Source } from "./source"
import { Org } from "./org"
import { Package2 } from "./package2"
import { Project } from "./project"
import { Config } from "./config"
import { Package } from "./package"
import { Auth } from "./auth"
import { Alias } from "./alias"
import { User } from "./user"
import { Schema } from "./schema"
import { Package1 } from "./package1"

export abstract class GeneratedSFDX {
  public limits: Limits
  public lightning: Lightning
  public data: Data
  public apex: Apex
  public doc: Doc
  public visualforce: Visualforce
  public mdapi: Mdapi
  public source: Source
  public org: Org
  public package2: Package2
  public project: Project
  public config: Config
  public package: Package
  public auth: Auth
  public alias: Alias
  public user: User
  public schema: Schema
  public package1: Package1

  protected requestExecutioner: ICommandExecutioner

  protected initializeModules() {
    this.limits = new Limits(this.requestExecutioner)
    this.lightning = new Lightning(this.requestExecutioner)
    this.data = new Data(this.requestExecutioner)
    this.apex = new Apex(this.requestExecutioner)
    this.doc = new Doc(this.requestExecutioner)
    this.visualforce = new Visualforce(this.requestExecutioner)
    this.mdapi = new Mdapi(this.requestExecutioner)
    this.source = new Source(this.requestExecutioner)
    this.org = new Org(this.requestExecutioner)
    this.package2 = new Package2(this.requestExecutioner)
    this.project = new Project(this.requestExecutioner)
    this.config = new Config(this.requestExecutioner)
    this.package = new Package(this.requestExecutioner)
    this.auth = new Auth(this.requestExecutioner)
    this.alias = new Alias(this.requestExecutioner)
    this.user = new User(this.requestExecutioner)
    this.schema = new Schema(this.requestExecutioner)
    this.package1 = new Package1(this.requestExecutioner)
  }
}
