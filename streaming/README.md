# permissionless-ads/streaming

```
git clone https://github.com/blockchain-etl/ethereum-etl.git
docker build --platform linux/x86_64 -t ethereum-etl:latest .
docker run --platform linux/x86_64 ethereum-etl:latest stream --start-block 3288417 -p 'http://34.31.89.241:8545?key=AIzaSyAEdv_2vuwxab2LnftR8nuqgCAQJ9ro7tc' -e transaction | jq .
# example output
#{
#  "type": "transaction",
#  "hash": "0xec77dcc677bcee0312a6872a5938f8af584b7dfdabcc9e90b8b0d1096645b741",
#  "nonce": 60678,
#  "transaction_index": 0,
#  "from_address": "0x7a21fe7e1815ad187af746acc2b2e7196a8aee40",
#  "to_address": "0xd0a340f5914e5a93bed91196c413e4832c83e98c",
#  "value": 1e+18,
#  "gas": 63000,
#  "gas_price": 3000000030,
#  "input": "0x",
#  "block_timestamp": 1681474608,
#  "block_number": 3288422,
#  "block_hash": "0xe4ab406c7fe4e51ee83f671b42abfb0c4a93a8c390f403ead92c282e33a7ed29",
#  "max_fee_per_gas": null,
#  "max_priority_fee_per_gas": null,
#  "transaction_type": 0,
#  "receipt_cumulative_gas_used": 21000,
#  "receipt_gas_used": 21000,
#  "receipt_contract_address": null,
#  "receipt_root": null,
#  "receipt_status": 1,
#  "receipt_effective_gas_price": 3000000030,
#  "item_id": "transaction_0xec77dcc677bcee0312a6872a5938f8af584b7dfdabcc9e90b8b0d1096645b741",
#  "item_timestamp": "2023-04-14T12:16:48Z"
#}
```
