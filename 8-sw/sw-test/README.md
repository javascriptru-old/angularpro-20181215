# To run push notifications

1. `npm install web-push -g`
2. `web-push generate-vapid-keys`
3. `web-push send-notification`
     --endpoint=
     --key=
     --auth=
     --payload='{\"message\": \"test\"}' 
     --vapid-subject='https://localhost:8080' 
     --vapid-pubkey=
     --vapid-pvtkey=

**endpoint, key, auth** - you can get from subscription (app.component.ts line 23)

**vapid-pubkey, vapid-pvtkey** - it's an output from `web-push generate-vapid-keys` command