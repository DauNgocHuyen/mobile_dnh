import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

const BonusDetailScreen = () => {
  const data = [20, 20, 10, 10, 0, 30, 30, 0, 0, 20, 0, 0];
  const labels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
  const money = ['20,000đ', '20,000đ', '10,000đ', '10,000đ', '0,000đ', '30,000đ', '30,000đ', '0,000đ', '20,000đ', '0,000đ']
  const dates = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10','Tháng 11', 'Tháng 12']

  return (
    <View style={{flex: 1}}>
      <View style={{ flexDirection: 'row', height: 200, paddingVertical: 5 }}>
        <YAxis
          data={data}
          contentInset={{ top: 10, bottom: 20 }}
          svg={{ fill: 'grey', fontSize: 10 }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: 'green' }}
            contentInset={{ top: 10, bottom: 10 }}
            spacingInner={0.2}
            spacingOuter={0.1}
          >
            <Grid />
          </BarChart>
          <XAxis
            style={{ marginHorizontal: 5 }}
            data={data}
            formatLabel={(value, index) => labels[index]}
            contentInset={{ left: 10, right: 10 }}
            svg={{ fontSize: 7, fill: 'black' }}
          />
        </View>
      </View>
      <ScrollView style={{ marginTop: 10,  marginBottom: 20}}>
      <View style={{...styles.container, marginTop: 10}}>
          <Text style={{ fontSize: 16 }}>Tổng</Text>
          <Text style={{ fontSize: 16 }}>100,000,000đ</Text>
        </View>
        <View style={{...styles.container, marginBottom:30}}>
          <Text style={{ fontSize: 16 }}>Trung bình</Text>
          <Text style={{ fontSize: 16 }}>20,000đ</Text>
        </View>
        {dates.map((date, index) => (
          <View key={index} style={styles.container}>
            <Text style={{ fontSize: 16 }}>{date} Tiền lương</Text>
            <Text style={{ fontSize: 16 }}>{money[index]}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default BonusDetailScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderColor: 'rgba(117,117,117,0.2)'
  }
})
